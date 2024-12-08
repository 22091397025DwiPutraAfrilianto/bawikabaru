import React, { useState } from "react";
import Table from "../components/dashboard/table"
import Modal from "../components/dashboard/modal";
import DeleteConfirmation from "../components/dashboard/deleteconfirmasi";
impor

function TembangJawaDashboard() {
  const [data, setData] = useState([]);
  const [currentSong, setCurrentSong] = useState(null); // Untuk edit
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  // Handle Open/Close Modal
  const openModal = (song = null) => {
    setCurrentSong(song);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentSong(null);
  };

  // Handle Create or Update
  const handleSave = (song) => {
    if (currentSong) {
      // Update
      setData(
        data.map((item) =>
          item.id === currentSong.id ? { ...song, id: item.id } : item
        )
      );
    } else {
      // Create
      setData([...data, { ...song, id: Date.now() }]);
    }
    closeModal();
  };

  // Handle Delete
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    setDeleteOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tambang Jawa CRUD</h1>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add Song
        </button>
      </header>

      {/* Table */}
      <Table
        data={data}
        onEdit={openModal}
        onDelete={() => setDeleteOpen(true)}
        setSongToDelete={setCurrentSong}
      />

      {/* Modal for Create/Edit */}
      {isModalOpen && (
        <Modal song={currentSong} onSave={handleSave} onClose={closeModal} />
      )}

      {/* Delete Confirmation */}
      {isDeleteOpen && (
        <DeleteConfirmation
          onDelete={() => handleDelete(currentSong.id)}
          onCancel={() => setDeleteOpen(false)}
        />
      )}
    </div>
  );
}

export default TembangJawaDashboard;
