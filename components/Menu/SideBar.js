import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menuItems } from "@/utils/data";
import { usePathname } from "next/navigation";

const CircularMenu = ({ isHomepage, footer }) => {
  const pathname = usePathname();
  const circleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const radiusMultiplier = 0.4;
  const totalArea = 90;

  useEffect(() => {
    if (!isHomepage) {
      const windowHeight = window.innerHeight || 238;
      const radius = windowHeight * radiusMultiplier;
      const increment = totalArea / (menuItems.length - 1);
      const startPoint = totalArea / 2;

      const circle = circleRef.current;
      if (circle) {
        circle.style.width = `${radius}px`;
        circle.style.height = `${radius}px`;
      }

      menuItems.forEach((item, index) => {
        const element = document.getElementById(`link-${index}`);
        const angle = startPoint - index * increment;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        if (element) {
          element.style.position = "absolute";
          element.style.left = `${radius + x}px`;
          element.style.top = `${radius - y}px`;
          element.style.color = "white";
          element.style.transition = "color 0.3s ease";

          element.onmouseover = () => {
            element.style.color = "#FFA500"; // Change text color on hover
          };

          element.onmouseout = () => {
            element.style.color = "white";
          };
        }
      });
    }
  }, [isHomepage]);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  if (isHomepage && !footer) {
    return (
      <div className="absolute left-0 top-0 z-40 hidden h-screen items-center justify-center lg:flex">
        <ul className="flex flex-col gap-6 p-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`text-white transition-all duration-300 ${
                activeIndex === index || pathname === item.url
                  ? "text-wlOrange"
                  : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleMenuClick(index)}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="absolute -left-[240px] top-[80px] z-40 hidden items-center justify-center lg:block">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          id={`link-${index}`}
          href={item.url}
          className={`w-[180px] text-white transition-all duration-300 ${
            pathname === item.url || activeIndex === index
              ? "text-wlOrange"
              : ""
          }`}
          style={{
            animationDelay: `${index * 200}ms`,
            marginBottom: "16px", // Adding gap between menu items
            display: "block",
          }}
          onClick={() => handleMenuClick(index)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default CircularMenu;
