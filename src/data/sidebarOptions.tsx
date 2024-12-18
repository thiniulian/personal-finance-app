import OverviewIcon from "../assets/images/icon-nav-overview.svg?react"; 
import TranzactionsIcon from "../assets/images/icon-nav-transactions.svg?react"; 
import BudgetsIcon from "../assets/images/icon-nav-budgets.svg?react";
import PotsIcon from "../assets/images/icon-nav-pots.svg?react";
import RecurringBillsIcon from "../assets/images/icon-nav-recurring-bills.svg?react";
import MenuOption from "../types/MenuOption";

const menuOptions : MenuOption[] = [
    {
        icon: OverviewIcon,
        label: 'Overview', 
        route: '/'
    }, 
    {
        icon: TranzactionsIcon, 
        label: 'Transactions',
        route: '/transactions' 
    }, 
    {
        icon: BudgetsIcon, 
        label: 'Budgets',
        route: '/budgets'
    }, 
    {
        icon: PotsIcon, 
        label: 'Pots',
        route: '/pots'
    }, 
    {
        icon: RecurringBillsIcon,
        label: 'Recurring bills',
        route: '/recurring-bills'
    }, 
]
export default menuOptions; 