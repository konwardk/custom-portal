import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../components/Button' // Optional, if you’re using your custom Button

export default function InputGallery() {
  const [images, setImages] = useState([])

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    const validImages = selectedFiles.filter(file => file.type.startsWith('image/'))

    if (validImages.length === 0) {
      toast.warning('Please select valid image files.')
      return
    }

    const imagePreviews = validImages.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }))

    setImages(prev => [...prev, ...imagePreviews])
    toast.success(`${validImages.length} image(s) added`)
  }

  const saveImages = () => {
    if (images.length === 0) {
      toast.error('No images selected to save.')
      return
    }

    // Simulate saving logic here (you can add API call later)
    toast.success(`${images.length} image(s) saved successfully!`)
  }

  return (
    <div className="min-h-screen px-6 py-8 bg-white text-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Add Some Images for the Portal
      </h3>

      {/* File input */}
      <div className="flex justify-center mb-6">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border p-2 rounded w-full max-w-md"
        />
      </div>

      {/* Image grid preview */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center mb-6">
          {images.map((img, index) => (
            <div key={index} className="relative border rounded shadow overflow-hidden">
              <img
                src={img.preview}
                alt={`preview-${index}`}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Save button */}
      <div className="flex justify-center">
        <Button text="Save & Next" onClick={saveImages} />
      </div>
    </div>
  )
}
