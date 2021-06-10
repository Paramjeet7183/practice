const Pic = styled.div`
  width: 800px;
  height: 800px;
`;
function Home() {
  const profile = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: Bg,
      image2: Bg,
      displacementImage: Mask,
    });
  });
  return (
    <section className="home">
      <Pic ref={profile} />
    </section>
  );
}
