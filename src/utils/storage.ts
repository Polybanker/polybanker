import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// Ensure storage is defined before using it
if (!storage) {
  throw new Error('Firebase storage is not initialized');
}

export const uploadFile = async (file: File, path: string): Promise<string> => {
  if (!storage) throw new Error('Firebase storage is not initialized');
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file');
  }
};

export const deleteFile = async (path: string): Promise<void> => {
  if (!storage) throw new Error('Firebase storage is not initialized');
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw new Error('Failed to delete file');
  }
};

export const getFileURL = async (path: string): Promise<string> => {
  if (!storage) throw new Error('Firebase storage is not initialized');
  try {
    const storageRef = ref(storage, path);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw new Error('Failed to get file URL');
  }
};