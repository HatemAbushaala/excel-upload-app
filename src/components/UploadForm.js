// components/UploadForm.js
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function UploadForm() {
  const [file, setFile] = useState();
  const [columns, setColumns] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    onDropRejected: () => {
      alert(
        'Invalid file type. Please upload an Excel file with .xls or .xlsx extension.'
      );
    },
    accept:
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // accept: '.xls,.xlsx',
  });

  const handleChange = (e) => {
    setColumns({ ...columns, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', columns.name);
    formData.append('price', columns.price);
    formData.append('quantity', columns.quantity);

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      {/* {file ? (
        <p>{file.name}</p>
      ) : (
        <div {...getRootProps()} className='dropzone'>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the Excel file here ...</p>
          ) : (
            <p>Drag and drop the Excel file here, or click to select file</p>
          )}
        </div>
      )} */}
      <div>
        <label htmlFor='name'>Name Column:</label>
        <input
          type='text'
          name='name'
          value={columns.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='price'>Price Column:</label>
        <input
          type='text'
          name='price'
          value={columns.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='quantity'>Quantity Column:</label>
        <input
          type='text'
          name='quantity'
          value={columns.quantity}
          onChange={handleChange}
        />
      </div>
      <button type='submit' disabled={!file}>
        Upload and Process
      </button>
    </form>
  );
}

export default UploadForm;
