import React from 'react'
import { toast } from 'react-toastify'

export const ConfirmToast = ({ message, onConfirm, onCancel }) => (
  <div className="flex flex-col gap-2">
    <p className="text-gray-800">{message}</p>
    <div className="flex justify-end gap-2">
      <button
        onClick={() => {
          toast.dismiss()
          onConfirm()
        }}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Yes
      </button>
      <button
        onClick={() => {
          toast.dismiss()
          if (onCancel) onCancel()
        }}
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        No
      </button>
    </div>
  </div>
)
