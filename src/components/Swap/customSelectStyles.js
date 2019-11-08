export default function styles() {
  return {
      option: provided => ({
          ...provided,
          fontWeight: '550',
      }),
      indicatorSeparator: provided => ({
          ...provided,
          display: 'none',
      }),
      container: provided =>({
        ...provided,
        width:'100px',
        borderRadius:'0.25rem 0 0 0.25rem',
      }),
      control: provided =>({
        ...provided,
        borderRadius:'0.25rem 0 0 0.25rem',
      }),
      menu: provided =>({
        ...provided,
        marginTop:'0',
        borderRadius:'0 0 0.25rem 0.25rem',
      })
  };
}
