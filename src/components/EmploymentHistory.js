import React from 'react';

function EmploymentHistory({ hideHeading = false }) {
  return (
    <section className="section section-employment">
      {!hideHeading && <h2>Employment_History</h2>}
      <h3>Software Developer, Interpath Advisory</h3>
      <p>
        <strong>May 2021 – Present</strong>
      </p>
      <p>Engaged in full-stack development projects using .NET Core, JavaScript, and SQL Server.</p>
      <h3>Restructuring Technology Team Developer, KPMG</h3>
      <p>
        <strong>August 2019 – May 2021</strong>
      </p>
      <p>Developed web applications to enhance business processes using .NET Core and JavaScript.</p>
    </section>
  );
}

export default EmploymentHistory;
