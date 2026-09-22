// components/AvatarPicker/AvatarPicker.tsx

'use client';

import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import css from './AvatarPicker.module.css';

type Props = {
  onChangePhoto: (file: File | null) => void;
  profilePhotoUrl?: string;
};

const AvatarPicker = ({ profilePhotoUrl, onChangePhoto }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (profilePhotoUrl) {
      setPreviewUrl(profilePhotoUrl);
    }
  }, [profilePhotoUrl]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setError('');

    if (file) {
      // Перевіряємо тип файлу
      if (!file.type.startsWith('image/')) {
        setError('Only images');
        return;
      }

      // Перевіряємо розмір файлу — максимум 5 MB
      if (file.size > 5 * 1024 * 1024) {
        setError('Max file size 5MB');
        return;
      }

      // Передаємо файл у батьківський компонент
      onChangePhoto(file);

      // Створюємо превʼю
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    // Очищаємо файл у батьківському компоненті
    onChangePhoto(null);

    // Прибираємо превʼю
    setPreviewUrl('');
  };

  return (
    <div>
      <div className={css.picker}>
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview"
            width={300}
            height={300}
            className={css.avatar}
          />
        )}

        <label
          className={previewUrl ? `${css.wrapper} ${css.reload}` : css.wrapper}
        >
          📷 Choose photo
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={css.input}
          />
        </label>

        {previewUrl && (
          <button type="button" className={css.remove} onClick={handleRemove}>
            ❌
          </button>
        )}
      </div>

      {error && <p className={css.error}>{error}</p>}
    </div>
  );
};

export default AvatarPicker;
