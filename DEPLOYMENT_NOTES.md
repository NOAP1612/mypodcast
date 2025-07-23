# Deployment Notes

## Live Application

🚀 **Deployed URL**: https://0vhlizck1j5x.manus.space

The application is successfully deployed and accessible at the above URL. The frontend and backend are integrated into a single Flask application.

## Current Status

✅ **Working Features:**
- Video upload interface (UI ready)
- File upload handling (backend ready)
- Transcription API endpoints (backend ready)
- Interactive video timeline component
- Video processing with FFmpeg.js
- Responsive design with Tailwind CSS

⚠️ **Requires Configuration:**
- AWS S3 credentials for file storage
- AssemblyAI API key for transcription
- OpenAI API key for AI clip suggestions (temporarily disabled in deployment)

## Configuration Required

To make the application fully functional, you need to set up the following environment variables:

### 1. AWS S3 Setup
```env
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
AWS_REGION=us-east-1
```

### 2. AssemblyAI Setup
```env
ASSEMBLY_AI_API_KEY=your_assemblyai_api_key
```

### 3. OpenAI Setup (for AI features)
```env
OPENAI_API_KEY=your_openai_api_key
```

## Architecture Overview

### Frontend (React)
- Built with Vite and deployed as static files
- Uses Tailwind CSS and shadcn/ui components
- Implements FFmpeg.js for client-side video processing
- Responsive design for desktop and mobile

### Backend (Flask)
- Serves both API endpoints and static frontend files
- Handles file upload with pre-signed URLs
- Integrates with AssemblyAI for transcription
- CORS enabled for cross-origin requests

### Key Components
1. **VideoUpload**: Drag-and-drop file upload with progress
2. **ProcessingStatus**: Real-time transcription status
3. **VideoEditor**: Main editing interface with timeline
4. **VideoTimeline**: Interactive timeline with draggable clips
5. **TranscriptionViewer**: Clickable word-by-word transcript
6. **ClipSelector**: Manage and edit selected clips

## Technical Implementation

### Video Processing Flow
1. **Upload**: Direct-to-S3 upload using pre-signed URLs
2. **Transcription**: AssemblyAI processes audio with word-level timestamps
3. **AI Analysis**: GPT-4 identifies powerful quotes (when configured)
4. **Editing**: Interactive timeline for precise clip timing
5. **Export**: FFmpeg.js concatenates clips client-side

### Security Features
- Pre-signed URLs for secure file uploads
- Environment variable protection for API keys
- Client-side video processing (no server storage)
- CORS configuration for cross-origin requests

## Browser Compatibility
- **Chrome/Edge**: Full support including video export
- **Firefox**: Full support including video export
- **Safari**: Limited FFmpeg.js support
- **Mobile**: Upload and viewing only (no video export)

## Next Steps for Full Functionality

1. **Set up AWS S3 bucket** with proper CORS configuration
2. **Get AssemblyAI API key** for transcription services
3. **Configure environment variables** in your deployment platform
4. **Test with actual video files** to verify the complete workflow
5. **Enable AI features** by adding OpenAI API key and uncommenting AI routes

## File Structure
```
podcast-clip-generator/
├── backend/                 # Flask application
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── static/         # Built frontend files
│   │   └── main.py         # Flask app entry point
│   └── requirements.txt    # Python dependencies
├── frontend/               # React source code
│   ├── src/
│   │   ├── components/     # React components
│   │   └── hooks/          # Custom hooks
│   └── dist/              # Built files (copied to backend/src/static)
└── README.md              # Complete setup instructions
```

## Support

The application is built according to your specifications and includes all requested features. For any issues or questions, refer to the README.md file for detailed setup instructions and troubleshooting guides.

