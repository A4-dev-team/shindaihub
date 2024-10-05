'use client';
import React, { useState } from 'react';
import { Alert, AlertTitle, IconButton, } from '@mui/material';
import { FaInfoCircle, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

interface InformationProps {
  title: string;
  message?: string;
  url: string;
}

const Information: React.FC<InformationProps> = ({ title, message, url }) => {

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Alert
      color='info'
      icon={<FaInfoCircle />}
      action={
        <>
          <IconButton
            aria-label="open"
            color="primary"
            size="small"
            onClick={handleClick}
          >
            <FaExternalLinkAlt />
          </IconButton>
        </>
      }
      sx={{
        mb: 2,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
      onClick={handleClick}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default Information;