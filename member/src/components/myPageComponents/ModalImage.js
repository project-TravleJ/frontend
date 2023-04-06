import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal12 } from '../../features/modal/modalSlice12';
import { uploadImage, invalidImage } from '../../features/modal/imageSlice';

const ModalImage = () => {
  const dispatch = useDispatch();
  const { loading, imageUrl, error } = useSelector((state) => state.image);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // 유효성 검사 추가
    if (!selectedFile || (!selectedFile.type.includes('image/') && !selectedFile.name.endsWith('.jpg') && !selectedFile.name.endsWith('.png'))) {
      dispatch(invalidImage());
      return;
    }
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (event) => {
      const previewUrl = event.target.result;
      setPreviewUrl(previewUrl);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      dispatch(uploadImage(formData));
      setPreviewUrl(null); // 업로드 후 미리보기 초기화
    }
  };

  const handleModalClose = () => {
    dispatch(closeModal12());
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <aside className={styles.modalbackdrop}>
      <div className={styles.modal}>
        <h2 className={styles.header}>이미지 변경</h2>
        {previewUrl ? (
          <img
            className={styles.image}
            src={previewUrl} // imageUrl에서 previewUrl로 수정
            alt="image"
          />
        ) : (
          <img
            className={styles.image}
            src={previewUrl ?? (imageUrl ?? '/images/Image.png')}
            alt="image"
          />
        )}

        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit" disabled={!file || loading}>
            업로드
          </button>
        </form>

        {!loading && imageUrl && (
          <div className={styles.imageBox}>
            <img
              src={`https://example.com/${imageUrl}`}
              alt="Uploaded"
            />
          </div>
        )}

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleModalClose}>
            변경
          </button>
          <button className={styles.button} onClick={handleModalClose}>
            취소
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ModalImage;
