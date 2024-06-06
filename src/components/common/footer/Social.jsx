const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/DevBaoo.712", icon: "fa-facebook" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
