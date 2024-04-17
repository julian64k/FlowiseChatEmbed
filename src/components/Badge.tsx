type Props = {
  botContainer: HTMLDivElement | undefined;
  poweredByTextColor?: string;
  badgeBackgroundColor?: string;
};

const defaultTextColor = '#929292';

export const Badge = (props: Props) => {
  return (
    <span
      class="w-full text-center px-[10px] pt-[6px] pb-[10px] m-auto text-[13px]"
      style={{
        color: props.poweredByTextColor ?? defaultTextColor,
        'background-color': props.badgeBackgroundColor ?? '#ffffff',
      }}
    >
      Considera verificar la información; puedo equivocarme.
    </span>
  );
};
