export default function WhoUseUsComponent() {
  return (
    <div className="flex-column px-5 md:container mb-5 mt-12">
      <div className="text-lg font-weight-700 text-bold mb-3">Our Sponsors</div>
      <div className="flex-row gap-3">
        <div className="sponsor empty flex-column justify-content-start">
          <p className="empty-text fs-5 font-weight-400">
            Be the first sponsor on the list!
          </p>
          <p className="empty-cta fs-5 font-weight-200">
            Join us in supporting innovation and empowerment. Contact us to
            become a sponsor today!
          </p>
        </div>
      </div>
    </div>
  );
}
