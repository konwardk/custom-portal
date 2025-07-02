import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { ConfirmToast } from '../components/ConfirmToast'

export default function InputLogo() {
  const [fileName, setFileName] = useState('No file selected')
  const [previewUrl, setPreviewUrl] = useState('')
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.warning('Please select a valid image file')
        setFileName('Invalid file type')
        setPreviewUrl('')
        return
      }

      setFileName(file.name)
      setPreviewUrl(URL.createObjectURL(file))
      toast.success('Image selected successfully!')
    }
  }

  const saveImage = () => {
    if (!previewUrl) {
      toast.error('Please select an image before saving')
      return
    }

    toast(
      <ConfirmToast
        message="Save this logo and continue?"
        onConfirm={() => {
          toast.success('Image saved! Redirecting...')
          setTimeout(() => {
            navigate('/input-images')
          }, 1000)
        }}
        onCancel={() => {
          toast.info('Cancelled.')
        }}
      />,
      { autoClose: false }
    )
  }

  return (
    <>
      <h3 className="text-xl font-semibold text-center mt-6 mb-2">Add a Logo to your Portal</h3>
      <div className="flex flex-col items-center gap-4 p-6">
        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block bg-blue-100 text-blue-700 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
                   file:text-sm file:font-semibold file:bg-blue-600 file:text-white
                   hover:file:bg-blue-700"
        />

        {/* File name */}
        <div className="text-sm text-gray-600 italic">{fileName}</div>

        {/* Image preview */}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-32 h-32 object-contain border rounded shadow"
          />
        )}

        {/* Save and next */}
        <Button text="Save & Next" onClick={saveImage} />
      </div>
    </>
  )
}
