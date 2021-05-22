const data = [
    {
      date: "jan 1,20X3",
      desciption: "balance forword",
      debit: 0,
      credit: 0,
    },
    {
      date: "jan 2,20X3",
      desciption: "collected receivable",
      debit: 10000,
      credit: 0,
    },
    {
      date: "jan 3,20X3",
      desciption: "cash sale",
      debit: 5000,
      credit: 0,
    },
    {
      date: "jan 5,20X3",
      desciption: "paid rent",
      debit: 0,
      credit: 7000,
    },
    {
      date: "jan 7,20X3",
      desciption: "paid salary",
      debit: 0,
      credit: 3000,
    },
    {
      date: "jan 8,20X3",
      desciption: "cash sale",
      debit: 4000,
      credit: 0,
    },
    {
      date: "jan 8,20X3",
      desciption: "paid bills",
      debit: 0,
      credit: 2000,
    },
    {
      date: "jan 10,20X3",
      desciption: "paid tax",
      debit: 0,
      credit: 1000,
    },
    {
      date: "jan 12,20X3",
      desciption: "collected receivable",
      debit: 7000,
      credit: 0,
    },
  ];
  
  //1.Sort based of date
  
  const sortByDate = (data) => data.sort((a, b) => (a.date > b.date ? 1 : -1));
  console.log(" 1. Sort based of date");
  console.log(sortByDate(data));
  
  //2.summation of credit and debit
  const summationCredit = (data) =>
    data.reduce((accum, item) => accum + item.credit, 0);
  const summationDebit = (data) =>
    data.reduce((accum, item) => accum + item.debit, 0);
  
  console.log("2.summation of credit and debit");
  console.log("sum of credit", summationCredit(data));
  console.log("sum of debit", summationDebit(data));
  
  //3. find all debit which grater than 5000
  
  const debitFilter = (data) =>
    data.filter((item) => {
      if (item.debit >= 5000) {
        return true;
      }
    });
  console.log("3. find all debit which grater than 5000");
  console.log(debitFilter(data));
  
  //4. find credit less than 3000
  
  const CreditFilter = (data) =>
    data.filter((item) => {
      if (item.credit <= 3000) {
        return true;
      }
    });
  
  console.log("4. find credit less than 3000");
  console.log(CreditFilter(data));
  
  // 5. print table in console in table format
  const tableFormat = (data) => {
    console.log("date ", "         desciption", "  credit", "    debit");
    data.map((item, ind) => {
      console.log(
        item.date,
        "   ",
        item.desciption,
        "  ",
        item.credit,
        "    ",
        item.debit
      );
    });
  };
  
  console.log(" 5. print table in console in table format");
  
  tableFormat(data);