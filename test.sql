INSERT INTO ProdutosImg (id, product_id, path) VALUES
(1, 1, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg'),
(2, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyV4YNdGFDP1k8HCyIuIo0L4ba57BSI-uGLg&s');


INSERT INTO Produtos ( enabled, nome, slug, estoque, descricao, preco, preco_desconto, desconto_off)
VALUES 
( TRUE, 'Smartphone X', 'smartphone-x', 100, 'Um smartphone de última geração.', 2500, 2200, 30),
( TRUE, 'Sofá Confort', 'sofa-confort', 50, 'Um sofá extremamente confortável.', 1800, 1500, 20),
( TRUE, 'Tênis Esportivo', 'tenis-esportivo', 200, 'Tênis perfeito para atividades esportivas.', 300, 250, 25),
( FALSE, 'Mesa de Jantar', 'mesa-jantar', 20, 'Mesa de jantar moderna.', 1200, 1000, 15);


INSERT INTO ProdutosImg ( product_id, path)
VALUES 
( 3, 'https://example.com/images/smartphone-x.jpg'),
( 4, 'https://example.com/images/sofa-confort.jpg'),
( 5, 'https://example.com/images/tenis-esportivo.jpg'),
( 6, 'https://example.com/images/mesa-jantar.jpg');

UPDATE ProdutosImg
SET path = 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg'
WHERE id = 9;


https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg



DELETE FROM ProdutosImg
WHERE id = 3;























INSERT INTO ProdutosImg (product_id, path)
VALUES
  (1, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg'),
  (2, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg'),
  (3, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg'),
  (4, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Preto_ID7336_01_standard.jpg');
