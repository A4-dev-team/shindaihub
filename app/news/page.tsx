'use client'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { ToolbarProps } from '@react-pdf-viewer/default-layout';
import { ReactElement } from 'react'
import { ToolbarSlot } from '@react-pdf-viewer/toolbar';

const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
  <Toolbar>
      {(slots: ToolbarSlot) => {
          const {
              CurrentPageInput,
              Download,
              EnterFullScreen,
              GoToNextPage,
              GoToPreviousPage,
              NumberOfPages,
              Print,
              ShowSearchPopover,
              Zoom,
              ZoomIn,
              ZoomOut,
          } = slots;
          return (
              <div
                  style={{
                      alignItems: 'center',
                      display: 'flex',
                      width: '100%',
                  }}
              >
                  <div style={{ padding: '0px 2px' }}>
                      <ShowSearchPopover />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomOut />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <Zoom />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomIn />
                  </div>
                  <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                      <EnterFullScreen />
                  </div>
              </div>
          );
      }}
  </Toolbar>
);

export default function Page() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
});

  return (
    <>
      <div className='my-10'>
        <h1 className='text-2xl'>※サービスに関する重要なお知らせ</h1>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <Viewer
              fileUrl="doc.pdf"
              plugins={[
                  defaultLayoutPluginInstance,
                ]}
                />
      </Worker>
    </>
  );
}