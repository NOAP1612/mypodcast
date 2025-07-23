import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import VideoUpload from './components/VideoUpload.jsx'
import ProcessingStatus from './components/ProcessingStatus.jsx'
import VideoEditor from './components/VideoEditor.jsx'
import './App.css'

function App() {
  const [appState, setAppState] = useState('upload') // 'upload', 'processing', 'editor'
  const [videoFile, setVideoFile] = useState(null)
  const [videoUrl, setVideoUrl] = useState('')
  const [transcriptionData, setTranscriptionData] = useState(null)
  const [processingStatus, setProcessingStatus] = useState('')

  const handleVideoUpload = (file, url) => {
    setVideoFile(file)
    setVideoUrl(url)
    setAppState('processing')
  }

  const handleTranscriptionComplete = (data) => {
    setTranscriptionData(data)
    setAppState('editor')
  }

  const handleBackToUpload = () => {
    setAppState('upload')
    setVideoFile(null)
    setVideoUrl('')
    setTranscriptionData(null)
    setProcessingStatus('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Podcast Clip Generator
            </h1>
            {appState !== 'upload' && (
              <Button 
                variant="outline" 
                onClick={handleBackToUpload}
              >
                New Upload
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {appState === 'upload' && (
          <VideoUpload onVideoUpload={handleVideoUpload} />
        )}
        
        {appState === 'processing' && (
          <ProcessingStatus 
            videoUrl={videoUrl}
            onTranscriptionComplete={handleTranscriptionComplete}
            status={processingStatus}
            setStatus={setProcessingStatus}
          />
        )}
        
        {appState === 'editor' && (
          <VideoEditor 
            videoFile={videoFile}
            videoUrl={videoUrl}
            transcriptionData={transcriptionData}
          />
        )}
      </main>
    </div>
  )
}

export default App

