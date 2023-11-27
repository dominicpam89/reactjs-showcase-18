import { FaHome } from "react-icons/fa"
import { FaBookmark } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaWhmcs } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";

export const utilNavigation = [
   { tag: "dashboard", link: "/dashboard", icon: <FaHome /> },
   { tag: "bookings", link: "/bookings", icon: <FaBookmark /> },
   { tag: "cabins", link: "/cabins", icon: <FaHotel /> },
   { tag: "users", link: "/users", icon: <FaUser /> },
   { tag: "settings", link: "/settings", icon: <FaWhmcs /> },
   { tag: "account", link: "/account", icon: <FaUsersCog /> },
]
