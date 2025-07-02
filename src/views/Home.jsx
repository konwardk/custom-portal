import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export default function Home() {
  const navigate = useNavigate()

  const createPage = () => {
    navigate('/input-name') // make sure this route exists in App.jsx
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-gray-800">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-lg">Click the button below to get started</p>
      <Button onClick={createPage} text="Create Portal" />
    </div>
  )
}
