class ImageUploader {
  async upload(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ecw4ezak");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dbkiia0bm/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    return await result.json();
  }
}

export default ImageUploader;
