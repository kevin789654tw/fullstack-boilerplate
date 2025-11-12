import React, { useState } from "react";
import { createItem } from "../utils/api";
import { Button } from "./Button";

type ItemFormProps = {
  onSuccess?: () => void;
};

export const ItemForm: React.FC<ItemFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    if (!name) return alert("Name is required");

    try {
      await createItem({ name, description });
      setName("");
      setDescription("");
      setSuccessMessage("Added successfully.");
      if (onSuccess) onSuccess();

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setSuccessMessage("Failed to add, please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full max-w-4xl">
      <h2 className="mb-2 text-xl font-bold">Add New Item</h2>
      <div className="flex flex-row items-stretch gap-2 flex-1">
        <div className="flex flex-col md:flex-row gap-2 flex-1">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded w-full md:flex-1"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border px-3 py-2 rounded w-full md:flex-1"
          />
        </div>

        <div className="flex-shrink-0">
          <Button onClick={handleSubmit}>Add Item</Button>
          {successMessage && (
            <span className="ml-2 md:ml-0 text-green-600 font-medium">
              {successMessage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
