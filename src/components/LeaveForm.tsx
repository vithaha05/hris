import React, { useState } from "react";
import Button from "./Button";
import { LeaveRequestInput } from "../types";

interface LeaveFormProps {
  onSubmit: (data: LeaveRequestInput) => void;
  onCancel: () => void;
}

const LeaveForm: React.FC<LeaveFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<LeaveRequestInput>({
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.startDate && formData.endDate && formData.reason) {
      onSubmit(formData);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4" style={{ marginBottom: '20px' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label" htmlFor="startDate">Start Date</label>
          <input
            className="form-input"
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label" htmlFor="endDate">End Date</label>
          <input
            className="form-input"
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="reason">Reason for Leave</label>
        <textarea
          className="form-textarea"
          id="reason"
          name="reason"
          placeholder="e.g. Family vacation"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-actions">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Submit Request
        </Button>
      </div>
    </form>
  );
};

export default LeaveForm;
