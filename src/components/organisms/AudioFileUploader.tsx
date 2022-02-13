import { styled } from '@linaria/react';
import { FileUploaderDropContainer } from 'carbon-components-react';
import React, { useState } from 'react';

export const AudioFileUploader = ({ onAddFiles }: { onAddFiles: React.Dispatch<React.SetStateAction<File>> }) => {
  const [files, setFiles] = useState([] as File[]);
  const props = {
    accept: ['audio/wav'],
    labelText: files.length > 0 ? files[0].name : 'ファイルをドラッグ&ドロップしてください',
    multiple: false,
    onAddFiles: (event: React.DragEvent<HTMLElement>, content: { addedFiles: File[] }) => {
      onAddFiles(content.addedFiles[0]);
      setFiles(content.addedFiles);
    }
  };

  return (
    <Wrapper>
      <FileUploaderDropContainer {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // background-color: #f4f4f4;
  margin: 16px;
  // position: relative;
`;
