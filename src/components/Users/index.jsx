import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  users,
  isLoading,
  setSerchValue,
  serchValue,
  setSuccess,
  onClickInvitedPeople,
}) => {
  const allPeople = users.filter((person) => {
    const allName = person.first_name + " " + person.last_name;
    return (
      allName.toLowerCase().includes(serchValue.toLowerCase()) ||
      person.email.toLowerCase().includes(serchValue.toLowerCase())
    );
  });

  const serchOfNamePeople = allPeople.map((person) => {
    return (
      <User
        information={person}
        key={person.id}
        onClickInvitedPeople={onClickInvitedPeople}
      />
    );
  });

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Найти пользователя..."
          value={serchValue}
          onChange={(e) => setSerchValue(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {serchOfNamePeople.lenth != 0 ? (
            serchOfNamePeople
          ) : (
            <div>There are no such users with the name</div>
          )}
        </ul>
      )}
      <button className="send-invite-btn" onClick={() => setSuccess(true)}>
        Отправить приглашение
      </button>
    </>
  );
};
