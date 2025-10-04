import  { Fragment, useState } from "react";
import { MsBadge, MsTable, MsButton } from "maxi-react-components";

const randomNames = [
  "John",
  "Jane",
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
];
const randomLastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Lewis",
];
const randomStatus = ["Active", "Inactive"];
const randomAmount = [100, 200, 300, 500, 800];
const randomAmountToPay = [10, 15, 20, 30, 50, 80, 90, 95, 96];
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

 const Table = () => {
  const [currentPage, setCurrentPage] = useState(0); // eslint-disable-line no-unused-vars
  const rowsPerPage = 5;

  const [data] = useState(
    Array.from({ length: 16 }, (_, index) => ({
      id: index + 1,
      name: getRandomElement(randomNames),
      lastName: getRandomElement(randomLastNames),
      status: getRandomElement(randomStatus),
      age: Math.floor(Math.random() * 60) + 18,
      amount: getRandomElement(randomAmount),
    }))
  );

  const [columns] = useState([
    { field: "id", header: "ID", width: "40px", sortable: true },
    { field: "name", header: "Name", width: "150px", sortable: true },
    {
      field: "lastName",
      header: "Last Name",
      width: "150px",
      sortable: true,
    },
    { field: "age", header: "Age", width: "150px", sortable: true },
    {
      field: "status",
      header: "Status",
      render: (row) => {
        return (
          <ms-badge
            value={row.status}
            severity={row.status === "Active" ? "success" : "danger"}
            class="ms-table-actions"
          ></ms-badge>
        );
      },
      footer: "Total",
      width: "150px",
      sortable: true,
    },
    {
      field: "amount",
      header: "Amount",
      align: "right",
      width: "150px",
      footer: data.slice(0, 5).reduce((acc, row) => acc + row.amount, 0),
      sortable: true,
    },
    {
      header: "Actions",
      field: "actions",
      render: (row) => {
        return (
          <div className="btns">
            <MsButton
              label="Edit"
              variant="primary"
              class="ms-table-actions c-width"
              onClick={(e) => handleClick(e, row, "Edit")}
            ></MsButton>
            &nbsp;&nbsp;
            <MsButton
              label="Delete"
              variant="danger"
              class="ms-table-actions c-width"
              onClickEvent={(e) => handleClick(e, row, "Delete")}
            ></MsButton>
          </div>
        );
      },
      width: "150px",
      align: "center",
    },
  ]);

  const [nestedInfo, setNestedInfo] = useState(null);

  const handleClick = (e, row, action) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    console.log({ row, action });
  };

  const handleRowClick = (row) => {
    // eslint-disable-next-line no-console
    console.log(row.detail);
  };

  const TemplateNested = ({ columns, data }) => {
    return (
      <>
        <p>Total agencies order:</p>
        <MsTable class="nested-table" columns={columns} data={data}></MsTable>
      </>
    );
  };

  const handleExpand = (row) => {
    // eslint-disable-next-line no-console
    console.log(row.detail);
    const columns = [
      { header: "Date", field: "date" },
      { header: "Description", field: "description" },
      { header: "Payment Method", field: "paymentMethod" },
      {
        header: "Currency",
        field: "currency",
        align: "center",
        render: (row) => (
          <h4>{row.description}</h4>
          
        ),
      },
      {
        header: "Amount to pay",
        field: "amountToPay",
        align: "right",
        render: (row) => (
          <MsBadge
            severity="success"
            value={row.amountToPay}
            class="ms-table-actions"
            onClick={() => {}}
          ></MsBadge>
        ),
      },
      {
        header: "Status",
        field: "status",
        align: "center",
        render: (row) => (
         <MsBadge
            severity={row.status === "pending" ? "warning" : "success"}
            value={row.status}
            class="ms-table-actions"
            onClick={() =>{}}
          ></MsBadge>
        ),
      },
    ];
    const data = [
      {
        date: "12/22/2024",
        amountToPay: getRandomElement(randomAmountToPay),
        description: "Monthly subscription",
        currency: "USD",
        status: "pending",
        paymentMethod: "creditCard",
        transactionId: "TXN12345",
      },
      {
        date: "12/28/2024",
        amountToPay: getRandomElement(randomAmountToPay),
        description: "Utility bill",
        currency: "USD",
        status: "completed",
        paymentMethod: "bankTransfer",
        transactionId: "TXN12346",
      },
    ];

    setNestedInfo(<TemplateNested columns={columns} data={data} />);
  };

  // Handle page change
  const handlePageChange = (event) => {
    const newPage = event.detail.currentPage;

    setCurrentPage(newPage);
  };

  return (
    <div style={{ width: "100%" }}>
        
      <MsTable
        data={data || []}
        size="small"
        columns={columns}
        dataKey="id"
        paginator
        showFooter
        selectionRow
        expandableRow
        rowsPerPage={rowsPerPage}
        onRowClick={handleRowClick}
        onPaginatorChange={(e) => handlePageChange(e)}
        onSort={() => {}}
        onSelection={() => {}}
        onExpand={(row) => handleExpand(row)}
        nestedTableContent={nestedInfo || []}
        totalRecords={data.length}
      >
   
      </MsTable>
    </div>
  );
};

export default Table;

