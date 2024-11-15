"use client"
import { Card } from '@mui/material'
import React from 'react'
import CardPopularProducts from './CardPopularProducts'
import CardPurchaseSummary from './CardPurchaseSummary'
import CardSalesSummary from './CardSalesSummary'
import CardExpenseSummary from './CardExpenseSummary'
import StatCard from './StatCard'
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
      <CardPopularProducts/>
      <CardSalesSummary/>
      <CardPurchaseSummary/>
      <CardExpenseSummary/>
      <StatCard 
      title= "Customer & Expenses"
      primaryicon={<Package className='text-blue-600 w-6 h-6'/>}
      dateRange='22-29 October 2023'
      details={[
        {
          title: "Customer Growth",
          amount: "175.00",
          changePercentage: 131,
          iconComponent: TrendingUp,
        },
        {
          title: "Expenses",
          amount: "10.00",
          changePercentage: -56,
          iconComponent: TrendingDown,
        },
      ]}
      />
      <StatCard 
      title= "Dues & Pending Orders"
      primaryicon={<CheckCircle className='text-blue-600 w-6 h-6'/>}
      dateRange='22-29 October 2023'
      details={[
        {
          title: "Dues",
          amount: "250.00",
          changePercentage: 131,
          iconComponent: TrendingUp,
        },
        {
          title: "Pending Orders",
          amount: "147",
          changePercentage: -56,
          iconComponent: TrendingDown,
        },
      ]}
      />
      <StatCard 
      title= "Sales & Discounts"
      primaryicon={<Tag className='text-blue-600 w-6 h-6'/>}
      dateRange='22-29 October 2023'
      details={[
        {
          title: "Sales",
          amount: "1000.00",
          changePercentage: 20,
          iconComponent: TrendingUp,
        },
        {
          title: "Discount",
          amount: "200.00",
          changePercentage: -10,
          iconComponent: TrendingDown,
        },
      ]}
      />
      
    </div>
  )
}

export default Dashboard;