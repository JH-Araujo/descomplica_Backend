import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, MenuItem, Select, Button, Box } from '@mui/material';

// Componente EditarTarefa refatorado
const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  const handleEditar = () => {
    setTarefas(current =>
      current.map(obj => obj.idTarefa === idTarefaSelecionada
        ? { ...obj, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, recursoTarefa, statusTarefa }
        : obj
      )
    );
    handleCloseEditar();
  };

  return (
    <Box sx={style}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <h2>Edição de Tarefa</h2>
      </Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Input id="tarefa_titulo" value={tituloTarefa} onChange={e => setTituloTarefa(e.target.value)} />
        <FormHelperText>Título da Tarefa</FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Input id="tarefa_descricao" value={descricaoTarefa} onChange={e => setDescricaoTarefa(e.target.value)} />
        <FormHelperText>Descrição da Tarefa</FormHelperText>
      </FormControl>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Input type="date" id="tarefa_inicio" value={inicioTarefa} onChange={e => setInicioTarefa(e.target.value)} />
          <FormHelperText>Início</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Input type="date" id="tarefa_fim" value={fimTarefa} onChange={e => setFimTarefa(e.target.value)} />
          <FormHelperText>Fim</FormHelperText>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Recurso</InputLabel>
          <Select value={recursoTarefa} onChange={e => setRecursoTarefa(e.target.value)}>
            <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
            <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
            <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select value={statusTarefa} onChange={e => setStatusTarefa(e.target.value)}>
            <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
            <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
            <MenuItem value={'Concluída'}>Concluída</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="contained" sx={{ bgcolor: '#61C445', '&:hover': { bgcolor: '#55AF3B' } }} onClick={handleEditar}>Salvar</Button>
        <Button variant="outlined" sx={{ borderColor: '#61C445', color: '#61C445', '&:hover': { borderColor: '#55AF3B', backgroundColor: '#F1F8E9' } }} onClick={handleCloseEditar}>Cancelar</Button>
      </Box>
    </Box>
  );
};

const style = {
  width: '60%',
  maxWidth: '100%',
  bgcolor: 'background.paper',
  p: 4,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default EditarTarefa;
