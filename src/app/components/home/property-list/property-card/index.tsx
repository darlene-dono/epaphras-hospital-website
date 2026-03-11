import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../../../style/index.css";
import { itemData } from "@/app/types/property/propertyData";

interface itemCardProps {
  item: itemData;
  viewMode?: string;
}

const itemCard: React.FC<itemCardProps> = ({ item, viewMode }) => {

  return (
    <div>
      {item && item !== null ?
        <div
          key={item.id}
          className={`bg-white shadow-item dark:bg-darklight rounded-lg overflow-hidden`}
          data-aos="fade-up"
        >
          <Link href={`/properties/properties-list/${item?.id}`} className={`group ${viewMode == "list" && 'flex'}`}>
            <div className={`relative ${viewMode == "list" && 'w-[30%]'}`}>
              <div className={`imageContainer h-[250px] w-full ${viewMode == "list" && 'h-full md:h-52'}`}>
                <Image
                  src={item?.item_img}
                  alt={`Image of ${item?.item_title}`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-125 duration-500"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[10px] right-[10px] bg-white p-2 rounded-lg"
                viewBox="0 0 24 24"
                width="38"
                height="38"
                fill="#2F73F2"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className={`p-5 sm:p-8 dark:text-white text-opacity-50 ${viewMode == "list" && 'w-[70%] flex flex-col justify-center'}`}>
              <div className="flex flex-col gap-1  border-border dark:border-dark_border mb-6">
                <div>
                  <h3 className="text-base text-gray">{item?.item_title}</h3>
                  <p className="text-base text-gray">{item?.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        : <div></div>}
    </div>
  );
};

export default itemCard;
