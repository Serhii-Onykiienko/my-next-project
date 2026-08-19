// app/notes/page.tsx

import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/src/lib/api';

// 1. Імпортуємо функцію

// 2. Робимо фукнцію асинхронною
const Notes = async () => {
  // 3. Виконуємо запит
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;
