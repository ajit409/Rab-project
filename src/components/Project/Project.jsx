import React from 'react';
import './Project.css'

const Project = () => {
  return (
    <div>
 <section id="project" className='projects'>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="text-align-center">
              <div>
                <div className="tagline">
                  <div className="text-weight-semibold">Project</div>
                </div>
                <div className="spacer-xsmall"></div>
                <h2 className="heading-2">Demo Projects</h2>
                <div className="spacer-small"></div>
              </div>
              <div className="sub-text-hero">
                <p className="text-size-medium-section text-color-sec">Entdecken Sie die beeindruckenden Projekte, die wir für unsere Kunden realisiert haben.</p>
              </div>
            </div>
            <div className="spacer-xxlarge"></div>
            <div>
              <div className="layout408_card card-1">
                <div className="layout408_card-content">
                  <div>
                    <div className="subheading">Zürich, Switzerland</div>
                    <div className="spacer-xxsmall"></div>
                    <div className="project-content">
                      <h3 className="heading-3">Helvetic Transport GmbH</h3>
                    </div>
                  </div>
                  <div className="project-content-sec">
                    <div className="wrapper-tags">
                      <div className="tag">
                        <div className="subheading-sec">Web design</div>
                      </div>
                      <div className="tag">
                        <div className="subheading-sec">Content</div>
                      </div>
                      <div className="tag">
                        <div className="subheading-sec">Webflow</div>
                      </div>
                    </div>
                    <p className="text-size-regular-project text-color-sec">EIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem Ipsum has been industry's standard.</p>
                    <div className="spacer-xxsmall"></div>
                    <a href="https://memorypower.rabsconnect.in/home" target="_blank" className="button-sec">
                      <div className="button-text-sec">Go To Page</div>
                      <div className="button-circle-sec"></div>
                    </a>
                    <a href="https://memorypower.rabsconnect.in/home" target="_blank" className="button-link">
                      <div className="button-text-sec">Visit it live</div>
                      {/* <div className="icon-embed-xxsmall w-embed"></div> */}
                      <div className="button-circle-sec"></div>
                    </a>
                  </div>
                </div>
                <div>
                  <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659c24a9c2406f3fb84cedf1_Helvetic%20Transporte%20GmbH.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 42vw, (max-width: 1919px) 43vw, 615px" srcset="https://assets-global.website-files.com/65961828f21f96309de14a8f/659c24a9c2406f3fb84cedf1_Helvetic%20Transporte%20GmbH-p-500.png 500w, https://assets-global.website-files.com/65961828f21f96309de14a8f/659c24a9c2406f3fb84cedf1_Helvetic%20Transporte%20GmbH.png 600w" alt="helvetic Transporte - reline sudio" className="layout408_image max-width-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Project


