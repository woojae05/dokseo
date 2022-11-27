package dgsw.hs.kr.woojaeboard.entity;


import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.repository.Temporal;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@ToString
public class Post {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    private String title;
    private String author;
    private long views;
    private String content;

    @CreationTimestamp
    private LocalDateTime createdTime;
}
