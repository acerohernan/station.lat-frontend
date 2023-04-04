import React, { useRef, useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Card, IconButton, Text } from "@latinstation/ui";
import useClickOutside from "@/hooks/useClickOutside";

const UserMenuButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const ref = useRef(null);

  useClickOutside({
    ref,
    callback() {
      setOpen(false);
    },
  });

  return (
    <div className="relative" ref={ref}>
      <IconButton
        icon={<UserIcon className="w-6 h-6 text-gray_dark dark:text-gray_secondary" />}
        onClick={handleClick}
      />
      {open && (
        <div className="absolute bottom-100 right-0 w-[240px] bg-white rounded-md shadow-card">
          <div className="grid grid-cols-[36px_1fr] items-center gap-2 p-3">
            <div className="w-9 h-9 rounded-full border" />
            <div>
              <Text bold variant="primary">
                Aaron Cooper
              </Text>
              <Text className="box-border">test@test.com</Text>
            </div>
          </div>
          <div className="w-full h-1 border-t dark:border-white/20" />
          <div className="flex flex-col gap-1 py-3">
            <button type="button" className="w-full hover:bg-gray_light text-left pl-4 py-1">
              <Text variant="primary">Set status</Text>
            </button>
            <button type="button" className="w-full hover:bg-gray_light text-left pl-4 py-1">
              <Text variant="primary">Profile & Account</Text>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenuButton;
