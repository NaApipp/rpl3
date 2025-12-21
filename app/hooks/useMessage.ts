// hooks/useMessageForm.ts
import { useState } from 'react';

export function useMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);


    // Validation Tidak Boleh Kosong
    if (!name.trim() || !message.trim()) {
      setStatus('Maaf, Nama dan message tidak boleh kosong.');
      return;
    }

    // Validation Nama Minimal 3 Karakter
    if (name.length < 3) {
      setStatus('Maaf,Nama minimal 3 karakter.');
      return;
    }
    
    // Validation Nama Tidak Boleh Karakter Spesial
    const noSpecialChars = /^[a-zA-Z\s]+$/;
    if (!noSpecialChars.test(name)) {
      setStatus("Maaf, Nama tidak boleh karakter spesial");
      return;
    }

    // Validation Pesan Minimal 5 Karakter
    if (message.length < 5) {
      setStatus('Maaf, Pesan minimal 5 karakter.');
      return;
    }
    
    


    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType('error');
        setStatus(data.error || 'Terjadi kesalahan');
        return;
      }

      setStatus(`Pesan berhasil dikirim! Terima kasih, ${name}.`);
      setStatusType('success');
      setName('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('Gagal mengirim pesan');
      setStatusType('error');
    }
  };

  return { name, setName, message, setMessage, status, statusType, handleSubmit };
}
