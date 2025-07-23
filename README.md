# Podcast Clip Generator

A full-stack web application that allows users to upload podcast videos, automatically identifies powerful clips using AI, and lets users edit and export these clips as a single short video reel for social media.

## Features

- **Video Upload**: Secure direct-to-cloud upload with progress tracking
- **AI Transcription**: Automatic transcription with speaker identification
- **AI Clip Suggestion**: GPT-powered analysis to identify viral-worthy moments
- **Interactive Timeline**: Visual timeline with draggable clip handles
- **Real-time Editing**: Click-to-seek transcription viewer
- **Video Processing**: Client-side video clipping and merging with FFmpeg.js
- **Export**: Download final video reel for social media

## Architecture

### Frontend (React + TypeScript)
- **Framework**: React with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Video Processing**: FFmpeg.js for client-side video manipulation
- **State Management**: React hooks

### Backend (Flask + Python)
- **Framework**: Flask with CORS support
- **Cloud Storage**: AWS S3 for video file storage
- **Transcription**: AssemblyAI for speech-to-text
- **AI Analysis**: OpenAI GPT-4 for clip suggestions

## Prerequisites

1. **Node.js** (v20+) and **pnpm**
2. **Python** (3.11+) and **pip**
3. **AWS Account** with S3 bucket
4. **AssemblyAI API Key**
5. **OpenAI API Key**

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend setup
cd ../frontend
pnpm install
```

### 2. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
AWS_REGION=us-east-1

# AssemblyAI Configuration
ASSEMBLY_AI_API_KEY=your_assemblyai_api_key

# OpenAI Configuration (already configured globally)
OPENAI_API_KEY=your_openai_api_key
OPENAI_API_BASE=https://api.openai.com/v1
```

### 3. AWS S3 Setup

1. Create an S3 bucket in your AWS account
2. Configure CORS policy for your bucket:

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": []
    }
]
```

3. Create IAM user with S3 permissions:
   - `s3:PutObject`
   - `s3:GetObject`
   - `s3:DeleteObject`

### 4. API Keys

- **AssemblyAI**: Sign up at [assemblyai.com](https://assemblyai.com) for transcription services
- **OpenAI**: Get API key from [platform.openai.com](https://platform.openai.com)

## Running the Application

### Development Mode

1. **Start Backend**:
```bash
cd backend
source venv/bin/activate
python src/main.py
```
Backend runs on `http://localhost:5000`

2. **Start Frontend**:
```bash
cd frontend
pnpm run dev --host
```
Frontend runs on `http://localhost:5173`

### Production Deployment

The application is designed for deployment on platforms like Vercel, Netlify, or similar:

1. **Backend**: Deploy as serverless functions or container
2. **Frontend**: Build and deploy static files
3. **Environment**: Configure all environment variables in your deployment platform

## Usage

1. **Upload Video**: Drag and drop or select a podcast video file
2. **Processing**: Wait for transcription and AI analysis (2-5 minutes)
3. **Edit Clips**: Review AI-suggested clips and adjust timing using the timeline
4. **Export**: Generate and download the final video reel

## Technical Details

### Video Processing Flow

1. **Upload**: Direct-to-S3 upload with pre-signed URLs
2. **Transcription**: AssemblyAI processes audio with word-level timestamps
3. **AI Analysis**: GPT-4 identifies powerful quotes for social media
4. **Editing**: Interactive timeline for precise clip timing
5. **Export**: FFmpeg.js concatenates clips client-side

### Security Features

- Pre-signed URLs for secure file uploads
- CORS configuration for cross-origin requests
- Client-side video processing (no server storage)
- Environment variable protection for API keys

## Troubleshooting

### Common Issues

1. **Upload Fails**: Check AWS credentials and S3 bucket permissions
2. **Transcription Stuck**: Verify AssemblyAI API key and quota
3. **AI Suggestions Empty**: Check OpenAI API key and model access
4. **Video Export Fails**: Ensure browser supports WebAssembly (FFmpeg.js)

### Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Limited FFmpeg.js support
- **Mobile**: Upload and viewing only (no video export)

## Development Notes

### File Structure

```
podcast-clip-generator/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── video.py      # Upload and transcription
│   │   │   ├── ai.py         # AI clip suggestions
│   │   │   └── user.py       # User management
│   │   ├── models/           # Database models
│   │   └── main.py          # Flask application
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── hooks/           # Custom hooks
│   │   └── App.jsx          # Main application
│   └── package.json
└── README.md
```

### Key Components

- **VideoUpload**: Handles file selection and upload
- **ProcessingStatus**: Shows transcription progress
- **VideoEditor**: Main editing interface
- **VideoTimeline**: Interactive timeline with clip handles
- **TranscriptionViewer**: Clickable word-by-word transcript
- **ClipSelector**: Manage and edit selected clips

## License

This project is for demonstration purposes. Please ensure you have proper licenses for all third-party services and APIs used.

## Support

For issues or questions, please check the troubleshooting section or review the console logs for detailed error messages.

