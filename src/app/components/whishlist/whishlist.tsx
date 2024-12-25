"use client";
import React, { useState, useEffect } from "react";

import { Trash2, GiftIcon, Plus, Share2, Copy } from "lucide-react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: "AIzaSyDfndCLnxJIuMwMXeuH_rz4MZe-BHE25M0",
  authDomain: "valentine-23c4b.firebaseapp.com",
  projectId: "valentine-23c4b",
  storageBucket: "valentine-23c4b.firebasestorage.app",
  messagingSenderId: "662248363475",
  appId: "1:662248363475:web:c463f6123a429ecbd24b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface WishlistItem {
  id: string;
  name: string;
  link?: string;
  timestamp: Timestamp;
}

const WishlistApp: React.FC = () => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [newItemLink, setNewItemLink] = useState<string>("");
  const [listId, setListId] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlListId = params.get("list");

    if (urlListId) {
      setListId(urlListId);
    } else {
      const newListId = Math.random().toString(36).substring(2, 15);
      setListId(newListId);
      window.history.pushState({}, "", `?list=${newListId}`);
    }
  }, []);

  useEffect(() => {
    if (listId) {
      setIsLoading(true);
      try {
        const wishlistRef = collection(db, "wishlists", listId, "items");
        const q = query(wishlistRef, orderBy("timestamp", "desc"));

        const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const itemsArray = snapshot.docs.map(
              (doc) =>
                ({
                  id: doc.id,
                  ...doc.data(),
                } as WishlistItem)
            );
            setItems(itemsArray);
            setIsLoading(false);
          },
          (err) => {
            console.error("Error fetching wishlist:", err);
            setError("Failed to load wishlist items");
            setIsLoading(false);
          }
        );

        return () => unsubscribe();
      } catch (error) {
        console.error("Error setting up listener:", error);
        setError("Failed to connect to database");
        setIsLoading(false);
      }
    }
  }, [listId]);

  const addItem = async (): Promise<void> => {
    if (newItem.trim() && listId) {
      try {
        const itemId = Math.random().toString(36).substring(2, 15);
        const itemRef = doc(db, "wishlists", listId, "items", itemId);

        await setDoc(itemRef, {
          name: newItem.trim(),
          link: newItemLink.trim(),
          createdBy: name.trim() || "Anonymous",
          timestamp: serverTimestamp(),
        });

        setNewItem("");
        setNewItemLink("");
      } catch (err) {
        console.error("Error adding item:", err);
        setError("Failed to add item");
      }
    }
  };

  const removeItem = async (itemId: string): Promise<void> => {
    try {
      const itemRef = doc(db, "wishlists", listId, "items", itemId);
      await deleteDoc(itemRef);
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const copyLinkToClipboard = (): void => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GiftIcon className="w-20 h-20" />
              <CardTitle className="text-2xl">
                Your Custom-Made Forever Secret Personal Santa
              </CardTitle>
            </div>
            <Button
              variant="outline"
              onClick={copyLinkToClipboard}
              className="flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {copied ? (
                <Copy className="w-4 h-4" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Share List"}
            </Button>
          </div>
          <Input
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-sm"
          />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Mobile View */}
              <div className="flex flex-col gap-2 sm:hidden">
                <Input
                  placeholder="Add a wishlist item..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Input
                  placeholder="Link (optional)"
                  value={newItemLink}
                  onChange={(e) => setNewItemLink(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button onClick={addItem} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </Button>
              </div>

              {/* Desktop View */}
              <div className="hidden sm:flex gap-2">
                <Input
                  placeholder="Add a wishlist item..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Input
                  placeholder="Link (optional)"
                  value={newItemLink}
                  onChange={(e) => setNewItemLink(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={addItem} className="whitespace-nowrap">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Your wishlist is empty. Add some items above!
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2"
                  >
                    <div className="flex-1 w-full">
                      <div className="font-medium">{item.name}</div>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 hover:underline break-all"
                        >
                          {item.link}
                        </a>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 w-full sm:w-auto"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      <span className="sm:hidden">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WishlistApp;
