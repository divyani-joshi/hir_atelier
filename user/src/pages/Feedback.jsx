
import { useState } from "react";
import api from "../utility/AxiosConfig";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/addfeedback", {
        name: formData.name,
        message: formData.message,
        rating: formData.rating,
      });

      alert("Feedback submitted successfully");

      console.log(response.data);

      setFormData({
        name: "",
        message: "",
        rating: "",
      });
    } catch (error) {
      console.log(error);
      console.log("Full Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);
  console.log("Status:", error.response?.status);
      alert(
        error.response?.data?.message ||
          "Failed to submit feedback"
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full border p-3 rounded-lg"
        required
      />

      <textarea
        placeholder="Your Feedback"
        value={formData.message}
        onChange={(e) =>
          setFormData({
            ...formData,
            message: e.target.value,
          })
        }
        className="w-full border p-3 rounded-lg"
        required
      />

      <select
        value={formData.rating}
        onChange={(e) =>
          setFormData({
            ...formData,
            rating: Number(e.target.value),
          })
        }
        className="w-full border p-3 rounded-lg"
        required
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

export default FeedbackForm;

