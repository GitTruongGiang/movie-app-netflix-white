import { Pagination, Stack } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function PaginationPage({page , totalPage , setPage}) {


const handlePageChange = (event, value) => {
    setPage(value);
    console.log(event, value);
  };
  


  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          onChange={handlePageChange}
          page={page}
          count={totalPage}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}

export default PaginationPage