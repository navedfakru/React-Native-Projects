const investmentData = {
  currentValue: 2103897, // Current value of the investment
  totalReturns: {
    amount: 681562,
    percentage: 47.92,
  },
  invested: 1422334, // Initial invested amount
  xirr: 46.98, // Extended Internal Rate of Return
  oneDayReturn: {
    amount: 3587,
    percentage: 0.17,
  },
  // Graph data (time vs returns)
  graphData: {
    invested: [
      { value: 1400000, label: "1D" },
      { value: 1410000, label: "1W" },
      { value: 1435000, label: "3M" },
      { value: 1500000, label: "6M" },
      { value: 1600000, label: "1Y" },
      { value: 1800000, label: "5Y" },
      { value: 1422334, label: "All" }
    ],
    returns: [
      { value: 1410000, label: "1D" },
      { value: 1450000, label: "1W" },
      { value: 1500000, label: "3M" },
      { value: 1600000, label: "6M" },
      { value: 1750000, label: "1Y" },
      { value: 2050000, label: "5Y" },
      { vlaue: 2103897, label: "All" }
    ],
  },
  // Features section
  features: [
    {
      id: "1",
      title: "Invest more",
      action: "navigateToInvestMore",
    },
    {
      id: "2",
      title: "Get loan against your investments",
      action: "navigateToLoan",
    },
  ]
};

export default investmentData;
