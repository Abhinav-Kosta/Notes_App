# Notes Adda - Modern Note Taking App

A sleek and modern note-taking application built with Node.js, Express, and MySQL. Features a vibrant, responsive UI with smooth animations and a full CRUD functionality.


## ✨ Features

- **Create Notes**: Add new notes with titles and detailed content
- **View Notes**: Browse through all notes in a beautiful card layout
- **Edit Notes**: Update note content with real-time preview
- **Delete Notes**: Remove unwanted notes with a single click
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Engaging animations and interactive elements
- **Persistent Storage**: All notes are stored in MySQL database

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **View Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, Bootstrap 5
- **Additional Tools**:
  - `method-override` for HTTP method handling
  - `uuid` for unique note identification
  - Custom CSS animations and transitions

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhinav-Kosta/Notes_App.git
   cd notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MySQL database:
   - Create a database named 'notes_app'
   - Update the database configuration in `index.js`:
     ```javascript
     const connection = mysql.createConnection({
         host: "localhost",
         user: "your-username",
         database: "notes_app",
         password: "your-password"
     });
     ```

4. Create the notes table:
   ```sql
   CREATE TABLE notes (
       id VARCHAR(40) PRIMARY KEY,
       title VARCHAR(30) NOT NULL,
       content VARCHAR(1000) NOT NULL
   );
   ```

5. Start the server:
   ```bash
   node index.js
   ```

6. Visit `http://localhost:8080/notes` in your browser

## 🎨 UI Features

- **Vibrant Color Scheme**: Energetic red and yellow theme
- **Interactive Cards**: Hover effects and smooth transitions
- **3D Button Effects**: Tactile feedback on interaction
- **Staggered Animations**: Elegant card loading sequence
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Form Styling**: Modern input fields with focus effects
- **Dynamic Backgrounds**: Subtle patterns and gradients

## 🛠️ API Endpoints

- `GET /notes` - View all notes
- `GET /notes/:id` - View a specific note
- `POST /notes` - Create a new note
- `PATCH /notes/:id` - Update a note
- `DELETE /notes/:id` - Delete a note

## 💡 Usage

1. **Creating a Note**:
   - Click the "Create" button
   - Enter title and content
   - Click "Add" to save

2. **Viewing Notes**:
   - All notes are displayed on the home page
   - Click "Show" to view full details

3. **Editing Notes**:
   - Click "Edit" on any note
   - Modify the content
   - Click "Save" to update

4. **Deleting Notes**:
   - Click "Delete" to remove a note
   - Action cannot be undone

## 🔧 Development

To modify the styling:
1. Edit `public/style2.css` for custom styles
2. The app uses CSS variables for easy theme customization:
   ```css
   :root {
     --primary-color: #FF3D57;
     --accent-color: #FFD60A;
     /* ... other variables */
   }
   ```

## 📱 Responsive Design

- Fluid grid layout for different screen sizes
- Mobile-friendly button and input sizing
- Optimized spacing for smaller devices
- Touch-friendly interactive elements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Abhinav Kosta
- GitHub: [@Abhinav-Kosta](https://github.com/Abhinav-Kosta/Notes_App)
- LinkedIn: [Abhinav Kosta]( https://www.linkedin.com/in/abhinav-kosta-188987304/)

---
⭐️ Star this repo if you find it helpful!
