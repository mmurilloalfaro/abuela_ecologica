export interface BoardMember {
  name: string;
  roleKey:
    | "president"
    | "vicePresident"
    | "treasurer"
    | "secretary"
    | "firstMember"
    | "secondMember";
  period: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "María Fernanda Murillo Alfaro",
    roleKey: "president",
    period: "2026 – 2028",
    image: "/founder/fernanda.JPG",
  },
  {
    name: "Cristel Arce",
    roleKey: "vicePresident",
    period: "2026 – 2028",
    image: "/board/Cristel_Arce.png",
  },
  {
    name: "Laura Alfaro González",
    roleKey: "treasurer",
    period: "2026 – 2028",
    image: "/board/Laura_Alfaro.JPG",
  },
  {
    name: "Eulin Chacón",
    roleKey: "secretary",
    period: "2026 – 2028",
    image: "/avatar-placeholder.svg",
  },
  {
    name: "Carlos Andrei Salas",
    roleKey: "firstMember",
    period: "2026 – 2028",
    image: "/avatar-placeholder.svg",
  },
  {
    name: "Alberto Rico Urones",
    roleKey: "secondMember",
    period: "2026 – 2028",
    image: "/board/Alberto_RicoU.jpeg",
  },
];