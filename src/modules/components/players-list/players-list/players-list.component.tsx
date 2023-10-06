import { PlayersItem } from "../players-item/players-item.component"

const players = [
  {
    "user": {
      "id": "73ada643-0af4-4695-900c-a4ef3d0c44ec",
      "first_name": "Антон",
      "last_name": "Колесников",
      "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
      "position": "MD",
    }
  },
  {
    "user": {
      "id": "e47f2063-155a-4693-8458-ebd731365198",
      "first_name": "Вячеслав",
      "last_name": "Осадчій",
      "avatar": "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
      "position": "D",
    }
  },
  {
    "user": {
      "id": "7965599a-6a97-4f62-b527-0bb6a4974718",
      "first_name": "Андрій",
      "last_name": "Клименко",
      "avatar": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      "position": "MD",
    }
  },
  {
    "user": {
      "id": "65f1ac05-dc9b-40ce-877f-387604b3d274",
      "first_name": "Володимир",
      "last_name": "Дантес",
      "avatar": "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
      "position": "FW",
    }
  },
  {
    "user": {
      "id": "74bb561b-544a-4bb6-beca-a0459fecda3f",
      "first_name": "Голова",
      "last_name": "Щуки",
      "avatar": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80",
      "position": "GK",
    }
  }
]

export const PlayersList = () => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {players.map((item) => (
        <PlayersItem {...item} />
      ))}
    </ul>
  )
}