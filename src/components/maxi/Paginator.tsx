import { useState } from "react";
import { MsPaginator } from "maxi-react-components";

const Paginator = () => {
  const [rowsValue, setRowsValue] = useState(20);
  const [page, setPage] = useState(0);
  const options = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "30", value: 30 },
  ];

  const handlePageChange = (event) => {
    const { currentPage, rows } = event.detail;
    setPage(currentPage);
    setRowsValue(rows);
  };
  return (
    <>
      
      <MsPaginator
        currentPage={page}
        onPageChange={handlePageChange}
        options={options}
        rows={rowsValue}
        totalRecords={50}
        // showPerPageDropdown={false}
      />
    </>
  );
};

export default Paginator;
