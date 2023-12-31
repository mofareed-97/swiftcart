import { LucideProps, type Icon as LucideIcon, Loader2 } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M197 211h193v-75c0-8.281-6.719-15-15-15h-75v60c0 8.281-6.719 15-15 15s-15-6.719-15-15v-60H120v60c0 8.281-6.719 15-15 15s-15-6.719-15-15v-60H15c-8.281 0-15 6.719-15 15v361c0 8.281 6.719 15 15 15h139.578A44.683 44.683 0 01152 497V256c0-24.809 20.191-45 45-45zm0 0"
        data-original="currentColor"
      ></path>
      <path
        d="M497 241H197c-8.285 0-15 6.715-15 15v241c0 8.285 6.715 15 15 15h300c8.285 0 15-6.715 15-15V256c0-8.285-6.715-15-15-15zm-80 106.5c0 40.527-32.973 73.5-73.5 73.5S270 388.027 270 347.5V316c0-8.285 6.715-15 15-15s15 6.715 15 15v31.5c0 23.984 19.516 43.5 43.5 43.5s43.5-19.516 43.5-43.5V316c0-8.285 6.715-15 15-15s15 6.715 15 15zM120 105c0-41.352 33.648-75 75-75s75 33.648 75 75v16h30v-16C300 47.102 252.898 0 195 0S90 47.102 90 105v16h30zm0 0"
        data-original="currentColor"
      ></path>
    </svg>
  ),
  spinner: Loader2,
};
