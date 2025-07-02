import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../components/Button'
import { ConfirmToast } from '../components/ConfirmToast' // adjust path if needed

export default function InputName() {
  const [name, setName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const navigate = useNavigate()

  const showName = () => {
    if (name.trim() === '') {
      toast.error('Please enter a name')
      return
    }

    // Show confirmation toast
    toast(
      <ConfirmToast
        message={`Proceed with the name "${name}"?`}
        onConfirm={() => {
          setDisplayName(`Your portal name will be ${name.trim()}!`)
          setShowMessage(true)
          toast.success('Name saved! Redirecting...')

          setTimeout(() => {
            setShowMessage(false)
            navigate('/input-logo')
          }, 3000)
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
        <h3>Add a name to your Portal</h3>
      <div className="flex justify-center items-center p-6">
        <div className="flex gap-3">
          <input
            className="h-10 p-3 border border-blue-300 rounded outline-none focus:ring focus:ring-blue-200"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <Button onClick={showName} text="Save" />
        </div>
      </div>

      {showMessage && (
        <div className="flex justify-center items-center text-2xl font-semibold text-stone-800 mt-4">
          {displayName}
        </div>
      )}
    </>
  )
}
