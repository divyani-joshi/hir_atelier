import { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
  });

  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        placeholder="Your Feedback"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        className="w-full border p-3 rounded-lg"
      />

      {/* Rating Dropdown */}
      <select
        value={formData.rating}
        onChange={(e) =>
          setFormData({
            ...formData,
            rating: Number(e.target.value),
          })
        }
        className="w-full border p-3 rounded-lg"
      >
        <option value="">Select Rating</option>
        <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
        <option value="4">⭐⭐⭐⭐ (4/5)</option>
        <option value="3">⭐⭐⭐ (3/5)</option>
        <option value="2">⭐⭐ (2/5)</option>
        <option value="1">⭐ (1/5)</option>
      </select>

      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white rounded-lg"
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default {FeedbackForm}