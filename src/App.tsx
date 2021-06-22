import { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  function handleOpenNewTransactionModalModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
