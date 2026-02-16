import {
  BadgeCheck,
  HeartPlusIcon,
  ShieldHalfIcon,
  ShoppingBag,
  UsersRoundIcon,
  VanIcon,
} from "lucide-react";

const statistic = [
  {
    id: 1,
    icon: <ShoppingBag size={40} color="#155DFC"   />,
    title: "1000+",
    content: "Quality Products",
  },
  {
    id: 2,
    icon: (
      <UsersRoundIcon size={40} color="#00A63E" />
    ),
    title: "50K+",
    content: "Happy Customers",
  },
  {
    id: 3,
    icon: <BadgeCheck size={40} color="#D08700" />,
    title: "15+",
    content: "Years Experience",
  },
  {
    id: 4,
    icon: <HeartPlusIcon size={40} color="#9810FA"  />,
    title: "99%",
    content: "Satisfaction Rate",
  },
  {
    id: 5,
    icon: <VanIcon color="#155DFC"  size={35}/>,
    title: "Fast Shipping",
    content:
      "Free shipping on orders over $50. Get your products delivered quickly and safely.",
  },
  {
    id: 6,
    icon: <ShieldHalfIcon color="#00A63E" size={35}/>,
    title: "Secure Payment",
    content:
      "100% secure payment processing. Your information is always protected.",
  },
  {
    id: 7,
    icon: <HeartPlusIcon color="#9810FA"  size={35}/>,
    title: "24/7 Support",
    content:
      "Our customer service team is always here to help you with any questions.",
  },
];

export default statistic;
