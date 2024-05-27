/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import DropMenuOption from "@/features/manages/components/DropMenuOption";
import useGetUser from "@/features/manages/hooks/useGetUser";
import { userState } from "@/features/manages/state/user";

/* TSX */
export default function Users() {
  const callGetUser = useGetUser();
  const users = useRecoilValue(userState);

  useEffect(() => {
    callGetUser();
  }, [callGetUser]);

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, created_at }, index) => {
            return (
              <tr key={index} className="z-16">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{username}</div>
                    </div>
                  </div>
                </td>
                <td>-</td>
                <td>
                  <span className="badge badge-ghost bg-manage-tertiary-color">
                    Master
                  </span>
                </td>
                <td>
                  <DropMenuOption>
                    <>
                      <li className="p-1">delete</li>
                    </>
                  </DropMenuOption>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
